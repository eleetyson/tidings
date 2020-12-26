// form for user to specify postcard destination address and other related info
import SearchInput from './SearchInput'
import { RoughNotation } from "react-rough-notation"

export default function CardDestinationForm(props) {
  return (
    <div className="box-shadow-card">
      <p className="box-shadow-card-title">
        <RoughNotation type="circle" show="true" color="#28a745" padding={15} animationDelay={2000} animationDuration={1000}>
          2. Specify a destination
        </RoughNotation>
      </p>

      <form className="destination  d-flex flex-column justify-content-center align-items-center pt-1 pb-2">
        <input
          name="senderName" type="text" placeholder="Your name *"
          value={props.senderName}
          onChange={props.handleChange}
          autoComplete={'' + Math.random()}
          required
        />

        <input
          name="recipientName" type="text" placeholder="Recipient name *"
          value={props.recipientName}
          onChange={props.handleChange}
          autoComplete={'' + Math.random()}
          required
        />

        <SearchInput
          address={props.address1}
          handleAddressInputChange={props.handleAddressInputChange}
          handleAddressInputSelect={props.handleAddressInputSelect}
        />

        <input
          name="address2" type="text" placeholder="Recipient apartment / unit number"
          value={props.address2}
          onChange={props.handleChange}
          autoComplete={'' + Math.random()}
        />
      </form>
    </div>
  )

}
