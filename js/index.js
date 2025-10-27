import { pages, gitLink, gitImage, info } from "./data.js";

const page = document.getElementById("page");
const params = new URLSearchParams(window.location.search);
const currentPage = params.get("currentpage");
const navList = document.getElementById("navList");
const infoBar = document.getElementById("info");

document.addEventListener("DOMContentLoaded", function () {
	// current page content
	const selected = currentPage || "home";
	page.innerHTML = pages[selected]?.text || pages["home"].text;

	infoBar.innerHTML = info;

	// github introvert cat
	const gitItem = document.createElement("li");

	const gitLinkEl = document.createElement("a");
	gitLinkEl.href = gitLink;
	gitLinkEl.target = "_blank";
	gitLinkEl.classList.add("git-link");

	const gitWrapper = document.createElement("span");
	gitWrapper.classList.add("git-wrapper");

	const gitIcon = document.createElement("img");
	gitIcon.src = gitImage;
	gitIcon.alt = "GitHub";
	gitIcon.classList.add("git-icon");

	gitWrapper.appendChild(gitIcon);
	gitLinkEl.appendChild(gitWrapper);
	gitItem.appendChild(gitLinkEl);
	navList.appendChild(gitItem);
});
