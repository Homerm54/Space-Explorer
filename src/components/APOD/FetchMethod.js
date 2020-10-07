//import fetchShortcut from 'components/utils/fetchShortcut';

/**
 * 
 * @param {string} url URL to where the fetch will be done, i.e, the NasaAPI url,
 * @param {bool} verbose Print to the log console the status of this fetch function.
 */
async function fecthShortcut(url, verbose) {

  return await fetch(url).then(response => {
    verbose && console.log("FETCH_ASYNC_STATE: Data fetched successfully.");
    return response.json();
  })
    .then(jsonData => {
      verbose && console.log("FETCH_ASYNC_STATE: Data converted to JSON\n", jsonData);
      return jsonData
    }).catch(e => {
      console.error("FETCH_ASYNC_STATE: Fatal Error Ocurred\n", e);
      throw Error(e);
      //Throw the error so that the caller to this function add its custom .catch method
    });
}

/**
   * 
   * @param {string-formated} date The Date to which the user want to retrieve the media (earth date)
   * @param {state function} setData setState function, to which the data retireved after the search will be updated.
   * @param {object} initState initial state of the object before the fetch call, in case of some error, by this method the image and description won't 
   * change.
   */
function APODFetch(date, setData, initState, verbose) {

  //Fetch media in the Nasa API
  fecthShortcut(`https://api.nasa.gov/planetary/apod?api_key=vFVFnamtfQmoZRo22d8cCO1da4md1V2RgGof9GSB&date=${date}`, true)
    .then(jsonData => {

      if (jsonData.code) { //If some error happened, always comes with a code
        verbose && console.debug('jsonData contains an error code.')
        initState.title = (<span className="text-danger">{jsonData.code}</span>);
        initState.copyright = (<span className="text-danger">{jsonData.msg}</span>);
        setData(prevData => ({
          ...prevData,
          ...initState,
          loading: false
        }));

      } else {

        verbose && console.debug('No error code, ok.')
        initState.title = jsonData.title;
        initState.mediaType = jsonData.media_type;
        initState.explanation = jsonData.explanation;
        
        if (jsonData.copyright) {
          initState.copyright = 'Copyright: ' + jsonData.copyright;
        } else {
          initState.copyright = 'Copyright: ' + 'Nasa Public Image Gallery';
        }

        if (jsonData.media_type === 'image') {
          verbose && console.debug('Media type is an image, loading it async.');

          const asyncImgDownload = new Image();
          /**
           * asyncImgDownload is temporary tag that will load the img in te background,
           * thus, avoinding a blank image on slow connection, but showing a nive spinner
           */
          asyncImgDownload.onload = function (e) {
            //In case everything is ok.
            initState.media = this.src;
            initState.loading = false;
            //Pass the url loaded to the real img tag, showing the img
            verbose && console.debug('Image loaded, everything is ok.')
            setData(prevState => ({ ...prevState, ...initState }));
          }

          asyncImgDownload.src = jsonData.url; //Trigger the load event
        } else { //Video by default
          verbose && console.debug('Media Type is a video');
          initState.media = jsonData.url;
          initState.loading = false;
          setData(prevState => ({ ...prevState, ...initState }));
        }
      }
    }).catch(e => {
      verbose && console.log('An error ocurred in the FetchMethod'); 

      initState.media = "images/bad-img.png";
      initState.title = <span className="text-danger text-bold">Opps, we've got an error</span>;
      initState.copyright = (<span className="text-bold">
        This is awkward, but we couldn't fetch the data :(
        <br />
        <span className="text-danger">{e.toString()}</span>
      </span>);

      console.debug("APOD_DATA_STATE: Error raised\n");
      setData(prevState => ({ ...prevState, ...initState, loading: false }));
    });

  //Show Loading indicator while fetching
  console.log("Fetch in progess, setting loading bar...");
  setData(prevState => ({ ...prevState, loading: true }));
}

export default APODFetch