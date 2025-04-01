import { useEffect, useState } from "react"
import { ethers } from "ethers"

function Trade({ toggleTrade, token, provider, factory }) {
  const [target, setTarget] = useState(0)
  const [limit, setLimit] = useState(0)
  const [cost, setCost] = useState(0)

  async function buyHandler(form) {
    try {
      const amount = form.get("amount");
  
      const cost = await factory.getCost(token.sold);
      const totalCost = cost * BigInt(amount);
  
      const signer = await provider.getSigner();
  
      const transaction = await factory.connect(signer).buy(
        token.token,
        ethers.parseUnits(amount, 18),
        { value: totalCost }
      );
  
      await transaction.wait();
      alert("Transaction successful!");
      toggleTrade();
    } catch (error) {
      if (error.code === "ACTION_REJECTED") {
        alert("Transaction rejected by the user.");
      } else {
        alert("An error occurred while processing the transaction.");
        console.error("Transaction error:", error);
      }
    }
  }  

  async function getSaleDetails() {
    const target = await factory.TARGET()
    setTarget(target)

    const limit = await factory.TOKEN_LIMIT()
    setLimit(limit)

    const cost = await factory.getCost(token.sold)
    setCost(cost)
  }

  useEffect(() => {
    getSaleDetails()
  }, [])

  return (
    <div 
    className="trade"
    >
      <h2>Trade</h2>

      <div className="token__details">
        <p className="name">{token.name}</p>
        <p style={{color:"white"}}>creator: {token.creator.slice(0, 6) + '...' + token.creator.slice(38, 42)}</p>
        <img src={token.image} alt="Pepe" width={200} height={200} />
        <p style={{color:"white"}}
        >marketcap: {ethers.formatUnits(token.raised, 18)} ETH</p>
        <p style={{color:"white"}}>base cost: {ethers.formatUnits(cost, 18)} ETH</p>
      </div>

      {token.sold >= limit || token.raised >= target ? (
        <p style={{color:"white"}} className="disclaimer">target reached!</p>
      ) : (
        <form action={buyHandler}>
          <input type="number" name="amount" min={1} max={10000} placeholder="1" />
          <input type="submit" value="[ buy ]" />
        </form>
      )
      }

      <button onClick={toggleTrade} className="btn--fancy">[ cancel ]</button>
    </div >
  );
}

export default Trade;