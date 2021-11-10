// IMPORT NEXTJS
import Link from "next/link";


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
                  <Link href="https://twitter.com/paleoenergie">
                    <a target="_blank"><TwitterOutlined alt="twitter"/></a>
                  </Link>
                  <Link href="https://www.facebook.com/paleoenergie">
                    <a target="_blank"><FacebookOutlined alt="facebook"/></a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCnYTz3OvFJd66DrFFFTS8sQ">
                    <a target="_blank"><YoutubeOutlined alt="youtube"/></a>
                  </Link>
                    <a target="_blank"><InstagramOutlined alt="instagram"/></a>
              </div>
          </div>
      </div>
    )
  }