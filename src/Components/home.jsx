import React from "react";
import { ReactSVG } from 'react-svg'
import logo from  '../assets/img/kusama-logo.svg'
import bodyGif from '../assets/img/parachains/KUSAMA-GIFS_3.gif'
import substrate from '../assets/img/substrate-playground.png'
import mesh from '../assets/img/mesh_graph_1.png'
import mesh2 from '../assets/img/mesh_graph_2.png'
import home from '../assets/img/home-vortexs.svg'
import '../assets/css/home.css'
import '../assets/css/homec3db.css'
import '../assets/css/loaders/loader-typing.css'

const Home = () => {
  return (
    <>
    <div className="home" style={{height:"100px !important"}}>
      <div class=" bg-dark">
        <div class=" js- m-0 p-3 bg-primary">
          <a
            href="https://polkadot.network/ecosystem/events/decoded-2023/?utm_source=kusama.network&amp;utm_medium=referral&amp;utm_campaign=decoded23&amp;utm_content=notification&amp;utm_term=two"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="small text-white text-center d-block mb-1">
              Join Polkadot Decoded 2023 on June 28-29! 👉{" "}
              <span class="text-underline">Register now</span>
            </span>
          </a>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark" data-sticky="top">
          <div className="container">
            <a className="navbar-brand fade-page" href="index.html">
              <img
                src={logo}
                alt="Kusama"
                className="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                className="icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z"
                  fill="#212529"
                />
              </svg>
            </button>
            <div className="collapse navbar-collapse justify-content-end">
              <div className="py-2 py-lg-0">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      href="parachains/index.html"
                      className="nav-link"
                      rel="noopener"
                    >
                      Parachains
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="auctions/index.html"
                      className="nav-link"
                      rel="noopener"
                    >
                      Auctions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://guide.kusama.network/"
                      className="nav-link"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Guide
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://guide.kusama.network/docs/kusama-claims/"
                      className="nav-link"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Claim KSM
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://polkadot.network/tag/kusama/"
                      className="nav-link"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item nav-item--social">
                    <a
                      href="https://twitter.com/kusamanetwork"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        className="icon undefined"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Twitter icon</title>
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item nav-item--social">
                    <a
                      href="https://kusa.ma/discord"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon undefined"
                      >
                        <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item nav-item--social">
                    <a
                      href="https://github.com/paritytech/polkadot/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 32.58 31.77"
                        className="icon undefined"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>GitHub icon</title>
                        <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.substrate.io/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn btn-outline-primary ml-lg-3"
            >
              Start Building
            </a>
          </div>
        </nav>

        <section class="bg-dark pd-0" id="home">
          <section  id="hero-scene">

          {/* Add a class hero below  */}
            <section class="move pd-0">
              <div class="container">
                <section class="treatment pd-0">
                  <img
                    src={bodyGif}
                    alt="Image"
                  />
                  <div class="typed-text-wrap">
                    <span class="typed-text typed-text-hero d-block">
                      PARACHAINS ARE HERE
                    </span>
                    <a
                      href="parachains/index.html"
                      class="hero-cta btn btn-outline-primary"
                      style={{ marginRight: "0" }}
                    >
                      Learn more
                    </a>
                  </div>
                </section>
              </div>
            </section>
          </section>

          <section class="pd-0 o-hidden">
            <section class="content bg-dark pd-0">
              <div class="container">
                <section class="intro pd-section">
                  <div class="wrap">
                    <div class="wrap-left">
                      <h2 class="h1 large">
                        The Scalable, Multichain Network for Radical Innovation.
                      </h2>
                    </div>
                  </div>
                  <div class="wrap">
                    <div class="wrap-right">
                      <p>
                        Unprecedented interoperability and scalability for
                        blockchain developers who want to quickly push the
                        limits of what’s possible. Built using Substrate with
                        nearly the same codebase and industry-leading multichain
                        infrastructure as Kusama’s cousin, Polkadot.
                      </p>
                    </div>
                  </div>
                </section>

                <section class="box-graphic parallax">
                  <section class="pd-0 move">
                    <img
                      src={home}
                      alt="Kusama Network"
                    />
                  </section>
                </section>

                <section class="genesis">
                  <div class="wrap">
                    <div class="wrap-left">
                      <h2>Origin of Kusama</h2>
                      <p>
                        The relationship between society and technology has
                        deteriorated to the point where large entities routinely
                        stretch and overstep their authority.
                      </p>
                      <p>
                        Kusama is a network built as a risk-taking, fast-moving
                        ‘canary in the coal mine’ for its cousin Polkadot. It's
                        a living platform built for change agents to take back
                        control, spark innovation and disrupt the status quo.
                      </p>
                    </div>
                  </div>
                </section>

                <section class="what-is-kusama parallax">
                  <div class="wrap move">
                    <div class="wrap-right box-outlines">
                      <h2>What is Kusama?</h2>
                      <p class="mb-4">
                        Kusama is a scalable network of specialized blockchains
                        built using Substrate and nearly the same codebase as
                        Polkadot. The network is an experimental development
                        environment for teams who want to move fast and innovate
                        on Kusama, or prepare for deployment on Polkadot.
                      </p>
                      <p>
                        Kusama was founded in 2019 by Gavin Wood, founder of
                        Polkadot and co-founder and former CTO of Ethereum.
                      </p>
                    </div>
                  </div>
                </section>

                <section class="launch-your-blockchain">
                  <div class="section-hero sticky parallax">
                    <div class="bg-img move">
                      <img
                        src={mesh}
                        alt="Launch your custom blockchain"
                      />
                    </div>
                    <h2 class="h1 large">
                      Launch your
                      <br />
                      custom blockchain
                    </h2>
                  </div>

                  <div class="features wrap">
                    <div class="wrap-right">
                      <div class="feature">
                        <h3>
                          <div class="icon fast"></div> Fast Iteration
                        </h3>
                        <p>
                          Move fast and ship your product. Kusama’s risk-taking
                          and nimble mentality allows developers to move swiftly
                          through the governance and upgrade process, enabling
                          rapid progress and growth.
                        </p>
                      </div>
                      <div class="feature">
                        <h3>
                          <div class="icon equals"></div> Low Economic Barriers
                        </h3>
                        <p>
                          Launch your custom blockchain (
                          <a
                            href="https://wiki.polkadot.network/docs/learn-parachains"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            style={{ color: "var(--c-cyan)" }}
                          >
                            parachain
                          </a>
                          ) project with low barriers to entry. Ideal for lean
                          startups looking to move fast and iterate.
                        </p>
                      </div>
                      <div class="feature">
                        <h3>
                          <div class="icon technology"></div> Advanced
                          Technology
                        </h3>
                        <p>
                          Build on a next-generation, sharded, multichain
                          network, while employing the newest features before
                          they are deployed on Polkadot.
                        </p>
                      </div>

                      <div class="feature">
                        <h3>
                          <div class="icon life-saver"></div> Open Governance
                        </h3>
                        <p>
                          Kusama is owned and governed by a community of network
                          participants who vote on and control the evolution of
                          the network.{" "}
                          <a
                            href="https://kusama.polkassembly.io/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            style={{ color: "var(--c-cyan)" }}
                          >
                            Have a voice
                          </a>
                          and make your mark in the evolution of the network.
                        </p>
                      </div>

                      <div class="feature">
                        <h3>
                          <div class="icon arrow-group"></div>Engaged Community
                        </h3>
                        <p>
                          Leverage Polkadot’s global brand and developer
                          community for your parachain, parathread or dApp.
                        </p>
                      </div>

                      <div class="feature">
                        <h3>
                          <div class="icon node"></div>Valuable Experience
                        </h3>
                        <p>
                          For teams looking to move to Polkadot after
                          fine-tuning on Kusama, begin building your community
                          and brand on Kusama before deployment.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="ready-to-start">
                  <a
                    href="http://info.polkadot.network/build"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    class="btn btn-outline-primary btn-blank"
                  >
                    Ready to Start? Contact Our Team.
                  </a>
                </section>

                <section class="bring-x-to-your-project">
                  <div class="section-hero sticky">
                    <div class="bg-img" style={{ opacity: "0" }}>
                      <img
                        src={mesh2}
                        alt="Launch your custom blockchain"
                      />
                    </div>

                    <h2 class="h1 large">
                      Bring <br />
                      <span class="typed-text typed-text-project"></span> to
                      your project
                    </h2>
                  </div>

                  <div class="features wrap">
                    <div class="wrap-right">
                      <div class="feature">
                        <h3>Innovation</h3>
                        <p>
                          Kusama is built by the same teams as Polkadot, using
                          nearly the same code and tools. The network places the
                          latest tech from Parity Technologies and Web3
                          Foundation in the hands of developers, even before
                          those features make it to Polkadot.
                        </p>
                      </div>
                      <div class="feature">
                        <h3>Scalability</h3>
                        <p>
                          Kusama’s sharded blockchains and open governance
                          provide a scalable and future-proof infrastructure for
                          businesses, marketplaces and applications to deploy
                          and mature.
                        </p>
                      </div>
                      <div class="feature">
                        <h3>Interoperability</h3>
                        <p>
                          Kusama brings multiple blockchains together into one
                          sharded network, freeing developers from the siloes
                          created by legacy blockchain networks.
                        </p>
                      </div>
                      <div class="feature">
                        <h3>Customization</h3>
                        <p>
                          With{" "}
                          <a
                            href="https://www.substrate.io/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            style={{ color: "var(--c-cyan)" }}
                          >
                            Substrate
                          </a>
                          , developers can build their own app-specific
                          blockchain and connect it to Kusama.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="canary-network parallax">
                  <div class="section-hero">
                    <div class="bg-img move">
                      <img
                        src={mesh2}
                        alt="Launch your custom blockchain"
                      />
                    </div>
                    <h2 class="h1 large">
                      Develop on the
                      <br />
                      Canary Network
                    </h2>

                    <div class="wrap">
                      <div class="wrap-right">
                        <p>
                          Many teams will choose Kusama for their dapp or
                          parachain and remain exclusively on Kusama. Other
                          teams will join Kusama as a temporary preparation
                          ground for deployment on Polkadot.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="wrap wrap__bottom">
                  <div class="wrap-left">
                    <h3>Parachains and Applications</h3>
                  </div>
                  <div class="wrap-right">
                    <ul>
                      <li>Gaming and eSports</li>
                      <li> Messaging</li>
                      <li>DAO</li>
                      <li>Marketplaces</li>
                      <li>Oracles</li>
                      <li>Music</li>
                      <li> Social Networking</li>
                    </ul>
                  </div>
                </section>

                <section style={{ textAlign: "center", paddingTop: "0" }}>
                  <a
                    href="https://wiki.polkadot.network/docs/en/build-build-with-polkadot#what-is-the-difference-between-building-a-parachain-a-parathread-or-a-smart-contract"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    class="btn btn-outline-primary btn-blank"
                  >
                    Why Build a Parachain
                  </a>
                </section>

                <section class="wrap wrap__bottom">
                  <div class="wrap-left">
                    <h3>KSM Token Utilization</h3>
                  </div>
                  <div class="wrap-right">
                    <ul>
                      <li>
                        <strong>Validate</strong>
                        the network
                      </li>
                      <li>
                        <strong>Nominate</strong>
                        validators
                      </li>
                      <li>
                        <strong>Bond</strong>
                        parachains or parathreads
                      </li>
                      <li>
                        <strong>Vote</strong>
                        on governance referenda
                      </li>
                    </ul>
                  </div>
                </section>

                <section class="wrap wrap__bottom">
                  <div class="wrap-left">
                    <h3>Built with Substrate</h3>
                  </div>
                  <div class="wrap-right">
                    <img
                      src={substrate}
                      alt="Substrate Playground"
                      class="mb-4"
                    />
                    <p>
                      Your Substrate Blockchain is natively compatible with
                      Kusama, making it simple to secure your blockchain and
                      communicate with Kusama's network.
                    </p>

                    <div class="button-wrap justify-content-start text-left ">
                      <a
                        href="https://www.substrate.io/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        class="btn btn-outline-white btn-blank"
                      >
                        Learn More
                      </a>
                      <a
                        href="https://playground.substrate.dev/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        class="btn btn-outline-primary btn-blank"
                      >
                        Substrate Playground
                      </a>
                    </div>
                  </div>
                </section>

                <section class="take-flight">
                  <h2 class="h1 large">Take Flight</h2>

                  <div class="flight-select-wrap section parallax">
                    <div class="flight-select box-outlines">
                      <h3>Build</h3>
                      <a
                        class="with-icon"
                        href="https://wiki.polkadot.network/docs/en/kusama-index"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Kusama Docs
                      </a>

                      <a
                        class="with-icon"
                        href="http://substrate.io/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Learn Substrate
                      </a>
                    </div>

                    <div class="flight-select box-outlines">
                      <h3>Validate</h3>
                      <a
                        class="with-icon"
                        href="https://wiki.polkadot.network/docs/en/maintain-guides-how-to-validate-kusama"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Start Validating
                      </a>

                      <a
                        class="with-icon"
                        href="https://share.hsforms.com/7051618/350763d6-4e1f-47ef-9fe9-d220faa2d656"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Technical Updates
                      </a>
                    </div>

                    <div class="flight-select box-outlines">
                      <h3>Join</h3>
                      <a
                        class="with-icon"
                        href="https://polkadot.network/polkadot-ambassador-program/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Ambassador Program
                      </a>

                      <a
                        class="with-icon"
                        href="https://wiki.polkadot.network/docs/en/maintain-guides-how-to-nominate-kusama"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Nominate a Validator
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </section>

        <section class="p-0">
          <div class="container">
            <div
              class="modal fade"
              id="subscribe-modal"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        class="icon bg-dark"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2426 6.34311L6.34309 16.2426C5.95257 16.6331 5.95257 17.2663 6.34309 17.6568C6.73362 18.0473 7.36678 18.0473 7.75731 17.6568L17.6568 7.75732C18.0473 7.36679 18.0473 6.73363 17.6568 6.34311C17.2663 5.95258 16.6331 5.95258 16.2426 6.34311Z"
                          fill="#212529"
                        />
                        <path
                          d="M17.6568 16.2426L7.75734 6.34309C7.36681 5.95257 6.73365 5.95257 6.34313 6.34309C5.9526 6.73362 5.9526 7.36678 6.34313 7.75731L16.2426 17.6568C16.6331 18.0473 17.2663 18.0473 17.6568 17.6568C18.0474 17.2663 18.0474 16.6331 17.6568 16.2426Z"
                          fill="#212529"
                        />
                      </svg>
                    </button>
                    <div className="m-xl-4 m-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-dark text-light">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-sm-12 col-lg-4 mt-3 mt-lg-0 text-center">
                <h5 class="h1 large text-center">Stay in the loop</h5>
                <p>
                  Subscribe to the newsletter to hear about Kusama updates and
                  events.
                </p>
                <button
                  class="btn btn-outline-primary"
                  data-toggle="modal"
                  data-target="#subscribe-modal"
                >
                  Subscribe
                </button>
                <small class="text-muted form-text mt-3">
                  To see how we use your information please see our{" "}
                  <a href="privacy/index.html">privacy policy</a>.
                </small>
              </div>
            </div>
          </div>
        </section>
        <footer className="pb-4 bg-dark text-light" id="footer">
          <div className="container">
            <div className="row mb-5">
              <div className="col-6 col-sm-3 col-lg-3 mt-3 mt-lg-0">
                <h5>Developers</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      href="https://guide.kusama.network/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Guide
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://github.com/paritytech/polkadot"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://matrix.to/#/!HzySYSaIhtyWrwiwEV:matrix.org?via=matrix.parity.io&via=matrix.org&via=web3.foundation"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Technical Riot Chat
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://web3.foundation/grants"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Web3 Foundation Grants
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://matrix.to/#/#Kusama-Direction:parity.io"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Governance Chat
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://matrix.to/#/!LhjZccBOqFNYKLdmbb:polkadot.builders?via=matrix.parity.io&via=matrix.org&via=web3.foundation"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Validator Chat
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-3 col-lg-3 mt-3 mt-lg-0">
                <h5>Community</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      href="https://www.notion.so/web3foundation/Polkadot-Community-Hub-ee1fd077ff6c42c381940404f6aa9f1c"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Community Hub
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://share.hsforms.com/7051618/2ed06e3a-2d5b-4acf-a9f1-71970bf868cb"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Ambassador Program
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.notion.so/web3foundation/Polkadot-Meetup-Hub-4511c156770e4ba9936386d8be5fe5be"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Meetup Hub
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.meetup.com/pro/polkadot"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Find a Local Meetup
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://polkadot.network/tag/kusama/"
                      className="nav-link"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="assets/kusama-brand-assets.zip"
                      className="nav-link"
                    >
                      Brand Assets
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-3 col-lg-3 mt-3 mt-lg-0">
                <h5>Social</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      href="https://kusa.ma/discord"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Discord
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://matrix.to/#/!HfRYKXBoPmDBCAWUEJ:polkadot.builders?via=web3.foundation&via=matrix.org&via=matrix.parity.io"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Watercooler Riot Chat
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://twitter.com/kusamanetwork"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.reddit.com/r/Kusama/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Reddit
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.youtube.com/channel/UCq4MRrQhdoIR0b44GxcCPxw"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.crowdcast.io/polkadot"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Crowdcast Webinars
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-3 col-lg-3 mt-3 mt-lg-0">
                <h5>Info</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      href="https://support.polkadot.network/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://polkadot.network/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Polkadot
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://substrate.dev/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Substrate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://web3.bamboohr.com/jobs/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://web3.foundation/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Web3 Foundation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://parity.io/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="nav-link"
                    >
                      Parity Technologies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col col-md-auto text-center">
                <small className="text-muted">
                  © Kusama · <a href="privacy/index.html">Privacy Policy</a> ·{" "}
                  <a href="disclaimer/index.html">Disclaimer</a>
                </small>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </div>
    </>
  );
};
export default Home;
