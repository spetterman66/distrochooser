const distroName = document.getElementById("name");
const description = document.getElementById("description");
const link = document.getElementById("link");
const logo = document.getElementById("logo");

const beginnerDistro = {
    1: {
        name: "Linux Lite",
        description: "Linux Lite is a beginner-friendly Linux distribution based on the Ubuntu LTS releases. It is a great distro for users who are new to Linux and want to get a feel for the operating system.",
        link: "https://www.linuxliteos.com/"
    },
    2: {
        name: "Linux Mint",
        description: "Linux Mint is a popular Linux distribution that is known for its ease of use and user-friendly interface. It is based on Ubuntu and comes with a variety of desktop environments to choose from.",
        link: "https://linuxmint.com/",
        logo: "images/Linux Mint.png"
    },
    3: {
        name: "Ubuntu",
        description: "Ubuntu is one of the most popular Linux distributions and is known for its ease of use and stability. It is based on Debian and comes with the GNOME desktop environment by default.",
        link: "https://ubuntu.com/"
    },
    4: {
        name: "MX Linux",
        description: "MX Linux is a midweight Linux distribution that is based on Debian and antiX. It is known for its stability and performance and is a great choice for users who want a lightweight and customizable operating system.",
        link: "https://mxlinux.org/"
    },
    5: {
        name: "Elementary OS",
        description: "Elementary OS is a beautiful and user-friendly Linux distribution that is based on Ubuntu. It is known for its clean and modern design and comes with a variety of pre-installed applications. Good for users who want a macOS-like experience.",
        link: "https://elementary.io/"
    }
}

function randomBeginnerDistro() {
    let distro = beginnerDistro[Math.floor(Math.random() * 5) + 1];
    distroName.innerHTML = distro.name;
    description.innerHTML = distro.description;
    link.innerHTML = `<a href="${distro.link}" target="_blank">${distro.link}</a>`;
    logo.innerHTML = `<img src="images/${distro.name}.png" alt="${distro.name} logo" width="128" height="128">`;
}

const intermediateDistro = {
    1: {
        name: "Fedora",
        description: "Fedora is a cutting-edge Linux distribution that is known for its focus on open source software and the latest technologies. It is sponsored by Red Hat and is a great choice for users who want a bleeding-edge operating system.",
        link: "https://getfedora.org/"
    },
    2: {
        name: "Debian",
        description: "Debian is one of the oldest and most stable Linux distributions. It is known for its commitment to free software and is a great choice for users who want a reliable and secure operating system.",
        link: "https://www.debian.org/"
    },
    3: {
        name: "openSUSE",
        description: "openSUSE is a community-driven Linux distribution that is known for its stability and ease of use. It is sponsored by SUSE and comes in two editions: Leap and Tumbleweed.",
        link: "https://www.opensuse.org/"
    },
    4: {
        name: "Manjaro",
        description: "Manjaro is a user-friendly Linux distribution that is based on Arch Linux. It is known for its rolling release model and comes with a variety of desktop environments to choose from.",
        link: "https://manjaro.org/"
    },
    5: {
        name: "Solus",
        description: "Solus is a modern and user-friendly Linux distribution that is known for its focus on desktop computing. It is an independent distribution and comes with the Budgie desktop environment by default.",
        link: "https://getsol.us/"
    },
    6: {
        name: "Pop!_OS",
        description: "Pop!_OS is a Linux distribution developed by System76, a company that sells Linux-based computers. It is based on Ubuntu and comes with the GNOME desktop environment by default. Includes NVIDIA drivers by default.",
        link: "https://pop.system76.com/"
    },
    7: {
        name: "Zorin OS",
        description: "Zorin OS is a Linux distribution that is known for its focus on user-friendliness and design. It is based on Ubuntu and comes with a variety of desktop environments to choose from.",
        link: "https://zorinos.com/"
    },
    8: {
        name: "KDE neon",
        description: "KDE neon is a Linux distribution that is known for its focus on the KDE Plasma desktop environment. It is based on Ubuntu and comes with the latest version of KDE Plasma by default.",
        link: "https://neon.kde.org/"
    }
}

function randomIntermediateDistro() {
    let distro = intermediateDistro[Math.floor(Math.random() * 8) + 1];
    distroName.innerHTML = distro.name;
    description.innerHTML = distro.description;
    link.innerHTML = `<a href="${distro.link}" target="_blank">${distro.link}</a>`;
    logo.innerHTML = `<img src="images/${distro.name}.png" alt="${distro.name} logo" width="128" height="128">`;
}

const advancedDistro = {
    1: {
        name: "Arch Linux",
        description: "Arch Linux is a lightweight and flexible Linux distribution that is known for its simplicity and customizability. It is a rolling release distribution and comes with the Pacman package manager.",
        link: "https://www.archlinux.org/"
    },
    2: {
        name: "Gentoo",
        description: "Gentoo is a source-based Linux distribution that is known for its flexibility and performance. It is a great choice for users who want to build their system from the ground up.",
        link: "https://www.gentoo.org/"
    },
    3: {
        name: "Slackware",
        description: "Slackware is one of the oldest Linux distributions and is known for its simplicity and stability. It is a great choice for users who want a traditional Unix-like operating system.",
        link: "https://www.slackware.com/"
    },
    4: {
        name: "Alpine Linux",
        description: "Alpine Linux is a security-oriented Linux distribution that is known for its small size and minimalism. It is a great choice for users who want a lightweight and secure operating system.",
        link: "https://alpinelinux.org/"
    },
    5: {
        name: "Void Linux",
        description: "Void Linux is a rolling release Linux distribution that is known for its simplicity and flexibility. It is a great choice for users who want a lightweight and customizable operating system.",
        link: "https://voidlinux.org/"
    },
    6: {
        name: "NixOS",
        description: "NixOS is a Linux distribution that is known for its declarative package management system. It is based on the Nix package manager and allows users to define their system configuration in a single file.",
        link: "https://nixos.org/"
    }
}

function randomAdvancedDistro() {
    let distro = advancedDistro[Math.floor(Math.random() * 6) + 1];
    distroName.innerHTML = distro.name;
    description.innerHTML = distro.description;
    link.innerHTML = `<a href="${distro.link}" target="_blank">${distro.link}</a>`;
    logo.innerHTML = `<img src="images/${distro.name}.png" alt="${distro.name} logo" width="128" height="128">`;
}