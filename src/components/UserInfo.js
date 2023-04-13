export default class UserInfo {
    constructor({ nameSelector, jobSelector, userProfileImageSelector }) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._profileImage = document.querySelector(userProfileImageSelector);
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent
        };
    }
    setUserInfo({ name, about, avatar }) {
        this._name.textContent = name;
        this._job.textContent = about;
        this._profileImage.src = avatar;
    }
}