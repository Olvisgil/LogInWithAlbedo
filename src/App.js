import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import { Image } from "react-bootstrap";
import albedo from "@albedo-link/intent";
import albedologo from "./albedo.png";

class LogInWithAlbedo extends Component {
  render() {
    return (
      <div>
        <div>
          <Button
            style={{ width: '207px', height: "40px" }}
            variant="contained"
            color="default"
            onClick={() => {
              albedo.publicKey({
              })
                .then(res => {
                  const {intent, pubkey, signature, signed_message} = res
                  console.log({intent, pubkey, signature, signed_message})
                })
            }}> Login With <Image
              style={{ width: '55px' }}
              src={albedologo}
            />

          </Button>
        </div>
      </div>
    )
  }
}

export default LogInWithAlbedo
