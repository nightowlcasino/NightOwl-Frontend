import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import SigRSVicon from "../../../assets/Elements/sigrsv-icon.png";
import ERGicon from "../../../assets/Elements/ergo-icon.png";
import paideiaIcon from "../../../assets/Elements/paideiaIcon.svg";
import netaIcon from "../../../assets/Elements/netaIcon.svg";
import ergopadIcon from "../../../assets/Elements/ergopadIcon.png";

import "./WalletHover.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WalletHover({
  disconnect,
  owlBalance,
  ergBalance,
  sigRSVBalance,
  ergopadBalance,
  netaBalance,
  paideiaBalance,
}) {
  function handleClearWallet() {
    disconnect();
  }

  return (
    <Menu as="div" className="mainDiv">
      <Transition
        show={true}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="mainMenuItem">
          <div style={{ marginBottom: "1px", fontWeight: "bold" }}>
            {owlBalance != 0 && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? "item1" : "item2", "item3")}
                  >
                    <img src={ERGicon} className="token-icon-img" />
                    <p>
                      OWL Balance:
                      <br />
                      {owlBalance} OWL
                    </p>
                  </a>
                )}
              </Menu.Item>
            )}
            {ergBalance != 0 && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? "item1" : "item2", "item3")}
                  >
                    <img src={ERGicon} className="token-icon-img" />
                    <p>
                      ERG Balance:
                      <br />
                      {ergBalance} ERG
                    </p>
                  </a>
                )}
              </Menu.Item>
            )}
            {sigRSVBalance != 0 && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? "item1" : "item2", "item3")}
                  >
                    <img src={SigRSVicon} className="token-icon-img" />
                    <p>
                      SigRSV Balance:
                      <br />
                      {sigRSVBalance} SigRSV
                    </p>
                  </a>
                )}
              </Menu.Item>
            )}
            {ergopadBalance != 0 && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? "item1" : "item2", "item3")}
                  >
                    <img src={ergopadIcon} className="token-icon-img" />
                    <p>
                      ergopad Balance:
                      <br />
                      {ergopadBalance} ergopad
                    </p>
                  </a>
                )}
              </Menu.Item>
            )}
            {netaBalance != 0 && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? "item1" : "item2", "item3")}
                  >
                    <img src={netaIcon} className="token-icon-img" />
                    <p>
                      NETA Balance:
                      <br />
                      {netaBalance} NETA
                    </p>
                  </a>
                )}
              </Menu.Item>
            )}
            {paideiaBalance != 0 && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? "item1" : "item2", "item3")}
                  >
                    <img src={paideiaIcon} className="token-icon-img" />
                    <p>
                      Paideia Balance:
                      <br />
                      {paideiaBalance} Paideia
                    </p>
                  </a>
                )}
              </Menu.Item>
            )}
            <Menu.Item>
              {({ active }) => (
                <a
                  style={{ textAlign: "center" }}
                  href="#"
                  onClick={handleClearWallet}
                  className={classNames(active ? "item1" : "item2", "item3")}
                >
                  <p
                    style={{
                      color: "rgba(205, 10, 10, 0.8)",
                      margin: "0 auto",
                      fontSize: "0.95rem",
                      fontWeight: "bold"
                    }}
                  >
                    Clear Wallet
                  </p>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
