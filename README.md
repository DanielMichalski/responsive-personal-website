# Responsive Personal Website

[![Publish Website](https://github.com/DanielMichalski/responsive-personal-website/workflows/Publish%20Website/badge.svg)](https://github.com/DanielMichalski/responsive-personal-website/actions?query=workflow%3A%22Publish+Website%22)
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://www.danielmichalski.com/)
[![W3C](https://raw.githubusercontent.com/DanielMichalski/responsive-personal-website/master/.github/images/w3c.svg)](https://validator.w3.org/nu/?doc=https%3A%2F%2Fwww.danielmichalski.com%2F)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/DanielMichalski/responsive-personal-website/graphs/commit-activity)

This is my personal website built with Bootstrap, jQuery, Particles.js, Aos.js, and many more. \
The Website is available here [www.danielmichalski.com](https://www.danielmichalski.com/)

## Table of Contents

* [Prerequisites](#prerequisites)
* [RWD Video](#rwd-video)
* [Used libraries](#libraries)
* [Docker containers](#docker-containers)
* [Running the application](#running-the-application)
* [Environments](#environments)
    * [Localhost environment](#localhost-environment)
    * [Production environment](#production-environment)
* [Application screens](#application-screens)

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## RWD Video

[![RWD website video](https://raw.githubusercontent.com/DanielMichalski/responsive-personal-website/master/.github/images/video.gif)](https://www.danielmichalski.com/)

## Libraries

| Library name                                                                   | Description                                                                                                                                                                           |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Bootstrap 4x](https://getbootstrap.com/docs/4.4/getting-started/introduction) | Bootstrap is the world’s most popular framework for building responsive, mobile-first sites.                                                                                          |
| [jQuery](https://jquery.com)                                                   | jQuery is a fast, small, and feature-rich JavaScript library.                                                                                                                         |
| [Material Design Icons](https://materialdesignicons.com)                       | Material Design Icons' growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project. |
| [Feather Icons](https://feathericons.com)                                      | Simply beautiful open source icons.                                                                                                                                                   |
| [Owl Carousel](http://owlgraphic.com/owlcarousel)                              | Touch enabled jQuery plugin that lets you create beautiful responsive carousel sliders.                                                                                               |
| [Backstretch Slider](http://srobbin.com/jquery-plugins/backstretch)            | Simple jQuery plugin that allows you to add a dynamically resized, slideshow-capable background image to any page or element.                                                         |
| [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup)                 | Magnific Popup is a responsive lightbox & dialog script with focus on performance and providing the best experience for users with any device.                                        |
| [Isotope](http://isotope.metafizzy.co)                                         | Filter & sort magical layouts.                                                                                                                                                        |
| [Freepik Images](https://www.freepik.com/home)                                 | Find Free Vectors, Stock Photos, PSD and Icons.                                                                                                                                       |
| [Unsplash Images](https://unsplash.com)                                        | The internet’s source of freely usable images. Powered by creators everywhere.                                                                                                        |
| [Ripple Js](https://github.com/sirxemic/jquery.ripples)                        | By the powers of WebGL, add a layer of water to your HTML elements which will ripple by cursor interaction.                                                                           |
| [Text Rotate Js](https://github.com/peachananr/simple-text-rotator)            | Super Simple Text Rotator by Pete R. A lightweight jQuery plugin that will allow you to add a super simple rotating text to your website.                                             |
| [Parallax Js](https://github.com/nk-o/jarallax)                                | Smooth parallax scrolling effect for background images, videos.                                                                                                                       |
| [Particles Js](https://github.com/VincentGarreau/particles.js)                 | A lightweight JavaScript library for creating particles.                                                                                                                              |
| [Tweenmax Js](http://greensock.com)                                            | Ultra high-performance, professional-grade animation for the modern web.                                                                                                              |
| [Animate On Scroll](https://github.com/michalsnik/aos)                         | Animations during scrolling the page.                                                                                                                                                 |

## Docker containers

There are two Docker images defined in `docker-compose.yml` file:

| Container name                                       | Description                                                                                     |
|------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| [apache-with-php](https://hub.docker.com/_/php)      | The Debian's Apache httpd in conjunction with PHP (as mod_php) and uses mpm_prefork by default. |
| [mailhog](https://hub.docker.com/r/mailhog/mailhog/) | MailHog is an email testing tool for developers.                                                |

## Running the application

In order to run the website please run the below command and in your browser type URL defined in
the [Localhost environment](#localhost-environment) section.

```bash
## Run the website using Docker Compose
docker-compose up -d
```

## Environments

### Localhost environment

| Component  | URL                                              |
|------------|--------------------------------------------------|
| Website    | [http://localhost/](http://localhost/)           |
| MailHog UI | [http://localhost:8025/](http://localhost:8025/) |

### Production environment

| Component | URL                                                         |
|-----------|-------------------------------------------------------------|
| Website   | [www.danielmichalski.com](https://www.danielmichalski.com/) |

## Application screens

<p style="text-align: center">
    <a href="https://www.danielmichalski.com/" target="_blank">
        <img alt="image1" width="80%" src="https://raw.githubusercontent.com/DanielMichalski/responsive-personal-website/master/.github/images/home.jpg" />
    </a>
</p>
