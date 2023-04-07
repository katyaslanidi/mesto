export default class UserInfo {
    constructor({ nameSelector, jobSelector, userProfileImageSelector }) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._profileImage = document.querySelector(userProfileImageSelector);
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent
        };
    }
    setUserInfo({name, job, image}) {
        this._name.textContent = name;
        this._job.textContent = job;
        this._profileImage.src = image;
    }
}