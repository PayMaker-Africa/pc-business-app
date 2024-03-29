import { useState } from "react"
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader"
import Form from "../Form"

export default function Add() {
  const [accountName, setAccountName] = useState(false)

  return (
    <>
      <SectionHeader text={"Add New Bank Account"} />
      <div id="add-account" className="container-fluid flat-card-style">
        <div className="row p-4 justify-content-center">
          <div id="top-up-wallet-form" className="col col-5 flat-card-style">
            <div className="p-3">
              <Form showFormTitle={false} buttonTitle="Add New Account" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
