export default class Video{
    constructor(parentId, width, height, src, type){
        this.parentId = parentId;
        this.width = width;
        this.height = height;
        this.src = src;
        this.type = type;
    }
    renderVideo(){
        const myParent = document.getElementById(this.parentId);
        const videoTag = `<video id="${this.parentId}" width="${this.width}" height="${this.height}" controls>
		<source src="${this.src}" type="${this.type}"></source></video>`;
        myParent.innerHTML = videoTag;
    }
}