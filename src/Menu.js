import food from './imgs/food.png'

export default function Menu(){
  return(
    <main>
      
      <div className="eyebrow">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>

      <div className="dishes">

        <article>
          <div className='cardFood'>
          <img src={food} alt="Dish" style={{width:'40%'}}/>
          <div>
            <h4>Salad</h4>
            <span>Price: 12,55$</span>
          </div>
          <p>Some text of the dish, as a description</p>
          <button>Order now!</button>
          </div>
        </article>

        <article>
          <div className='cardFood'>
          <img src={food} alt="Dish" style={{width:'40%'}}/>
          <div>
            <h4>Pasta</h4>
            <span>Price: 12,55$</span>
          </div>
          <p>Some text of the dish, as a description</p>
          <button>Order now!</button>
          </div>
        </article>

        <article>
          <div className='cardFood'>
          <img src={food} alt="Dish" style={{width:'40%'}}/>
          <div>
            <h4>Pizza</h4>
            <span>Price: 12,55$</span>
          </div>
          <p>Some text of the dish, as a description</p>
          <button>Order now!</button>
          </div>
        </article>

      </div>
    </main>
  )
}