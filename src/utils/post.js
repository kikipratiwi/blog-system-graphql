const postSummary = (text="", limit=10) => {
  return text.split(" ", limit).join(" ");
}

const toTitleCase = (str="") => {
  return str.replace(
    /\w\S*/g,
    (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


export {postSummary, toTitleCase};