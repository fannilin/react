function Matka(props) {
    return (
        <div>
            Otsikko: { props.tiedot.otsikko } <br />
            Päivä: { props.tiedot.paiva } <br />
            Paikka:{ props.tiedot.paikka } <br />
            Sää: { props.tiedot.saa} <br />
            Kuvaus: { props.tiedot.kuvaus } <br />

            <p>Tänään on { props.paiva }</p>
        </div>
    )
}

export default Matka;