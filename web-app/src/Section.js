export default function Section(){
    return(
    <div>
   <div className="alert">
      <p>
        Coronavirus (COVID-19) may affect your travel plans.
        <p>Learn more</p>
      </p>
    </div>
    <div className="section">
      <h1>Compare and book flights with ease</h1>
      <p>Discover your next dream destination</p>
      <div className="section-items">
        <label for="">
          <input type="radio" name="a" />
          Round-Trip
        </label>
        <label for="">
          <input type="radio" name="a" />
          One-way
        </label>
        <label for="">
          <input type="radio" name="a" />
          Multi-city
        </label>
      </div>
      <div className="search">
        <input type="text" placeholder="Where from?" className="se" />
        <input type="text" placeholder="Where to?" className="se" />
        <input type="date" name="date" id="date" className="se" />
        <input type="date" name="date" id="date" className="se" />
        <input type="button" value="search" className="se btn" />
      </div>
    </div>
</div>
    )
}