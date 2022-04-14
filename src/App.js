import "./App.css";
import spankpay, { PaymentCurrencyType } from "@spankchain-dev/spankpay-sdk";

const App = () => {
  const showSpankPay = async (fiatEnabled, guestOnly) => {
    await spankpay.show({
      username: "arielle",
      message: "Money",
      amount: "10",
      currency: 'GBP',
      // acceptedCurrencies: ['BTC', 'ETH'],
      callbackUrl: 'https://eozbqullx2we6nn.m.pipedream.net',
      description: 'Test Invoice Show',
      metadata: { orderId: 'sc696969' },
      fiatEnabled: fiatEnabled || false,
      guestOnly: guestOnly || false,
      allowPartial: false,
      premiumPct: 0.04,
      apiKey: 'pk_volatile_vision_ODCifGOg7rYefhn1HDA25xnAChxN4sJuv0FCWgoxr',
      redirectUrl: 'http://localhost:3000/'
    });
  };

  return (
    <div className='App'>
      Hello, this is my app that integrates with Spankpay
    <div>
      <button onClick={() => showSpankPay(true, true)}>
        Using the JS show method{" "}
        <span role="img" aria-label="smile">
          ❤️
        </span>
      </button>
    </div>
    </div>
  );
};

export default App;
