import { Link, Outlet } from "react-router-dom"

const Nav = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 fs-1">Alex Vue</span>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item">
                            <Link to='/' className="nav-link fs-4">About Me</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/Portfolio' className="nav-link fs-4">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/Contact' className="nav-link fs-4">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/Resume' className="nav-link fs-4">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav 