import React from "react";

const styles = { 
    container: {
        marginLeft: "30px",
        marginTop: "30px",
        fontWeight: "bold",
        color: "green",
        textTransform: "capitalize",
      },
}

const About = () => (
    <div style={styles.container}>
        Woo! React router did it's magic and navigated you to the about page.
    </div>
)

export default About;