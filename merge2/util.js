let util = {
  getElementById(id){
    return document.querySelector("#"+id);
  },
  getRandom(){
    return parseInt(Math.random()) * 1000;
  }
}
export default util;