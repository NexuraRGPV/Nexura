import styles from "./coordinators.module.css";
import Card from "./card_1"; // Card कॉम्पोनेंट का सही पाथ दें

const Coordinators = () => {
    // Data for faculty coordinators
    const faculty = [
        {
            image: "/people/mr. aditya_pratap_singh.jpeg",
            name: "Mr. Aditya Pratap Singh",
            position: "Assistant Professor of Department of Automobile Engineering | Faculty Coordinator of Nexura",
            description: "Test description"
        },
        {
            image: "/people/alka bani maam.jpeg",
            name: "Dr. Alka Bani Agrawal",
            position: "Head of Department of Automobile Engineering chief Patron | Head of Nexura",
            description: "Test description"
        },
        {
            image: "/people/mr. vikas verma.jpeg",
            name: "Mr. Vikas Verma",
            position: "Assistant Professor at Department of Automobile Engineering | Faculty Coordinator of Nexura",
            description: "Test description"
        },
    ];

    // Data for founding members
    const founders = [
        {
            image: "/people/Soumya Ma'am.jpg",
            name: "Soumya Shrivastava",
            position: "Co-head of Parametric Modelling and Simulation | Executive Board Member, Nexura",
            description: "Soumya Shrivastava, a B.Tech student in Automobile Engineering at UIT-RGPV Bhopal, specializes in UI/UX design and parametric modeling. As Head of UI/UX Designing and an Executive Board Member at Nexura, she creates user-friendly digital experiences."
        },
        {
            image: "/people/PawanSir.jpg",
            name: "Pawan Soni",
            position: "Head of Parametric Modelling and Simulation | Executive Board member , Nexura ",
            description: "Pawan Soni, a B.Tech student in Automobile Engineering at UIT-RGPV Bhopal, is passionate about 3D animation, VFX, and parametric modeling. As Head of 3D Modeling and Animation and an Executive Board Member at Nexura, he brings technical ideas to life."
        },
        {
            image: "/people/Astha Ma'am.jpg",
            name: "Astha Pawar",
            position: "Executive Board Member , Nexura ",
            description: "Astha Pawar, a B.Tech student in Computer Science Engineering at UIT-RGPV Bhopal, is passionate about web development, DSA, and blockchain. As Head of Web Development and an Executive Board Member at Nexura, she leads innovative projects.",
            shouldCrop: true
        },
        {
            image: "/people/Vishal.jpg",
            name: "Vishal Singh Thakur",
            position: "Head of UI/UX | Member, Nexura",
            description: "Vishal Singh Thakur, a Mechanical Engineering student at UIT-RGPV, Bhopal, is passionate about 3D Animation and UI/UX Design. As a UI/UX Mentor and active member at Nexura, he is refining his skills to create intuitive digital experiences.",
            imageStyle: { objectPosition: 'bottom' }
        },
        {
            image: "/people/Rishabh.jpg",
            name: "Rishabh Tomar",
            position: "Head of 3D Animation and Modelling,Nexura",
            description: "I'm Rishabh Tomar,Currently pursuing a B.Tech in Automobile Engineering from UIT RGPV, A passionate 3D artist with a keen eye for detail and creativity.",
            imageStyle: { objectPosition: 'bottom' }
        },
        {
            image: "/people/Mradul.jpg",
            name: "Mradul Shivhare",
            position: "Senior Member - Web Development,Nexura",
            description: "Mradul Shivhare, a web developer with three years of experience, is a Senior Member of the Web Development Department at Nexura. A graduate of UIT-RGPV, Bhopal, he excels in building seamless, high-performance web solutions.",
            imageStyle: { objectPosition: 'bottom' }
        },
        {
            image: "/people/Harshit Sir.jpg",
            name: "Harshit Mishra",
            position: " Pre-Final year Mechanical Engineering Student | PR & HR Enthusiast ",
            description: "Fascinated by machines and cars since childhood, Harshit pursued Mechanical Engineering at UIT-RGPV, Bhopal. In his freshman year, he discovered a passion for Public Relations, Operations, and HR Management.",
            shouldCrop: true,
            imageStyle: { objectPosition: 'top' }
        },
        {
            image: "/people/Sameer sir.png",
            name: "Mohammad Sameer ",
            position: "Pre-Final year Petrochemical Engineering Student |B.Tech in Automobile Engineering",
            description: "Mohammad Sameer, a Petrochemical Technology Engineering student at UIT-RGPV, Bhopal, is passionate about web development. A member of Nexura's Front-End Web Development team, he has four months of experience."
        },
        {
            image: "/people/Ansh Sir.jpg",
            name: "Ansh Juneja ",
            position: "Head of PR & Management | Pre-Final year Electronic Engineering Student | PR & HR Enthusiast",
            description: "Ansh Juneja a pre-final year student at UIT-RGPV, specializing in Electronics and Communication Engineering. Passionate about technology, I have gained hands-on experience in circuit design, embedded systems, and telecommunications."
        },
    ];

    return (
        <div className={styles.allContainer} id="team">
            <div className={styles.coordinatorsContainer}>
                <h2>Faculty Coordinators</h2>
                <div className={styles.cardGrid}>
                    {faculty.map((member) => (
                        <Card
                            key={member.name}
                            image={member.image}
                            name={member.name}
                            position={member.position}
                            description={member.description}
                        />
                    ))}
                </div>
                <h2>Founding Members</h2>
                <div className={styles.cardGrid}>
                    {founders.map((member) => (
                        <Card
                            key={member.name}
                            image={member.image}
                            name={member.name}
                            position={member.position}
                            description={member.description}
                            shouldCrop={member.shouldCrop}
                            imageStyle={member.imageStyle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Coordinators;