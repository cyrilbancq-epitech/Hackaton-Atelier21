import React from "react";
import './Footer.scss';

// IMPORT PICTURES
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";


export default function Footer() {
    return (
      <div className="footer">
          <div className="footer-wrapper">
              <div className="footer-left">
                    <p className="footer-title">PALEO H2O 2021 / BY DCB </p>
              </div>
              <div className="footer-right">
                    <a href="https://twitter.com/paleoenergie" target="_blank" rel="noreferrer"><TwitterOutlined alt="twitter"/></a>
                    <a href="https://www.facebook.com/paleoenergie" target="_blank" rel="noreferrer"><FacebookOutlined alt="facebook"/></a>
                    <a href="https://www.youtube.com/channel/UCnYTz3OvFJd66DrFFFTS8sQ" target="_blank" rel="noreferrer"><YoutubeOutlined alt="youtube"/></a>
                    <a href="https://www.youtube.com/channel/UCnYTz3OvFJd66DrFFFTS8sQ" target="_blank" rel="noreferrer"><InstagramOutlined alt="instagram"/></a>
              </div>
          </div>
      </div>
    )
  }