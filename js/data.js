/* Data module for your portfolio */

export const gitLink = "https://github.com";
export const gitImage = "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png";

export const pages = {
  home: {
    text: `
      <h2>Hey, I'm Aurex!</h2>
      <h4>My experience:</h4>
      <ul>
        <li>
          6 years of experience in 
          <a href="https://github.com/luau-lang/luau" target="_blank">Luau scripting</a> for Roblox,
          <a href="?currentpage=roblox">More</a>.
        </li>
		<li>
          4 years of experience in 
          <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">C/C++</a>,
          <a href="?currentpage=c_cpp">More</a>.
        </li>
		<li>
          Couple of side projects,
          <a href="?currentpage=side">More</a>.
        </li>
      </ul>
    `
  },
	roblox: {
	text: `
		<h3>My Stack:</h3>
		<ul class="stack-list">
		<li>Git (<a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories" target="_blank">Repositories</a>)</li>
		<li>Rojo (<a href="https://code.visualstudio.com/" target="_blank">VS Code Integration</a>)</li>
		<li>Wally (<a href="https://github.com/UpliftGames/wally" target="_blank">Package Management</a>)</li>
		<li>StyLua (<a href="https://github.com/JohnnyMorganz/StyLua" target="_blank">LuaU Formatter</a>)</li>
		<li>Selene (<a href="https://kampfkarren.github.io/selene/roblox.html" target="_blank">Static Analysis Tool</a>)</li>
		</ul>

		<h3>Previous Projects:</h3>
		<ul class="projects-list">
		<li class="project-card">
			<div class="project-img-wrapper">
			<img src="../assets/preview_1.png" alt="Grow a Garden Game" class="project-img">
			<div class="hover-overlay">
				<a href="https://youtu.be/xA-40IcYZgU" target="_blank">Watch on YouTube</a>
			</div>
			</div>
			<div class="project-info">
			<strong>Grow a Garden Game</strong>
			<p>Added extensible and expandable mutations and growth systems.</p>
			</div>
		</li>

		<li class="project-card">
			<div class="project-img-wrapper">
			<img src="../assets/preview_2.png" alt="FPS Game" class="project-img">
			<div class="hover-overlay">
				<a href="https://youtu.be/1dMH1QRkVYY" target="_blank">Watch on YouTube</a>
			</div>
			</div>
			<div class="project-info">
			<strong>FPS Game</strong>
			<p>Created an advanced FPS Framework from scratch.</p>
			</div>
		</li>

		<li class="project-card">
			<div class="project-img-wrapper">
			<img src="../assets/preview_3.png" alt="Pet Game" class="project-img">
			<div class="hover-overlay">
				<a href="https://youtu.be/t4e9NqFGIK8" target="_blank">Watch on YouTube</a>
			</div>
			</div>
			<div class="project-info">
			<strong>Pet Game</strong>
			<p>Built pet simulator-like game with hatching, datastore saving, inventory,  pets, and currency.</p>
			</div>
		</li>
		</ul>
	`
	},
	c_cpp: {
		text: `
			<h3>My Stack:</h3>
			<ul class="stack-list">
			<li>Git (<a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories" target="_blank">Repositories</a>)</li>
			<li>CMake (<a href="https://cmake.org/" target="_blank">Build System</a>)</li>
			<li>VS Code (<a href="https://code.visualstudio.com/" target="_blank">IDE</a>)</li>
			</ul>
		`
	},
	side: {
		text: `
			<h3>My Side Projects:</h3>
			<ul class="projects-list">
			<li class="project-card">
				<div class="project-img-wrapper">
				<img src="../assets/preview_macos.png" alt="Hackintosh" class="project-img">
				</div>
				<div class="project-info">
				<strong>Hackintosh</strong>
				<p>Managed to install macOS Monterey on Dell E7250 (Using <a href="https://dortania.github.io/OpenCore-Install-Guide/">Opencore</a>)</p>
				</div>
			</li>
			</ul>
			<li class="project-card">
			<div class="project-img-wrapper">
			<img src="../assets/preview_lfs.png" alt="LFS" class="project-img">
			
			</div>
			<div class="project-info">
			<strong>Linux From Scratch</strong>
			<p>Created custom linux system using <a href="https://www.linuxfromscratch.org/lfs/view/12.1/index.html">LFS</a></p>
			</div>
			</li>
		`
	}

};

export const info = `Reach me out on <a href="https://www.roblox.com/users/8791189802/profile">roblox</a> and on discord @aurexdev`