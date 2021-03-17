/**
* @author traj3ctory
* @function Footer
**/

const Footer = () => {
    return (
        <footer className="footer bg-todo">
            <p className="pr-3 mb-0">
                {"Copyright © "}
                {new Date().getFullYear()}
                <span>-Traj3ctory</span>
            </p>
        </footer>
    )
}


export default Footer