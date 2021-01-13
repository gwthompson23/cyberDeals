import React from "react"
// import Container from "react-bootstrap/Container"

export default function Header() {
    let styles = {
        header: {
            marginBottom: 20,
            padding: 30,
            //backgroundColor: "#0b0c10",
            //borderRadius: 10,
            //boxShadow: "8px 8px 16px #000000"
        },
        title: {
            color: "#66fcf1",
            fontSize: 120,
            textShadow: "2px 2px 4px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: 3
        },
        subtitle: {
            color: "#c5c6c7"
        }
    }

    return(
        <div style={styles.header}>
            <h1 style={styles.title}>
                CyberDeals
            </h1>
            <h3 style={styles.subtitle}>
                Your hub for finding deals on your favorite games
            </h3>
       </div>
    )
}