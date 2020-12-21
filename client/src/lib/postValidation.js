const postValidation = ({ creator, message, selectedFiles, tags, title}) => {
  if (creator && message && tags && title) {
    //info is alright...
    return true;
  } else {
    //You can show a message on the screen
    throw new Error('You must fill the required fields!');
  }
};

export default postValidation;