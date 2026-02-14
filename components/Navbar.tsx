
import {Box} from "lucide-react"
import Button from './ui/Button'

const handleAuthCLick = async () => {}

const Navbar=()=>{
    const isSignedIn=true
    const userName="sayan"
    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Box className={"logo"}/>
                       <span className={"name"}>
                           Roomify
                       </span>
                    </div>
                  <ul className={"links"}>
                      <a href="#">
                          Product
                      </a>
                      <a href="#">
                          Pricing
                      </a>
                      <a href="#">
                          Community
                      </a>
                      <a href="#">
                          Enterprise
                      </a>

                  </ul>
                </div>
                <div className="actions">
                    {isSignedIn ? (
                        <>
                            <span className="greeting">
                                {userName ? `Hi, ${userName}` : 'Signed in'}
                            </span>

                            <Button size="sm" onClick={handleAuthCLick} className="btn">
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleAuthCLick} size="sm" variant="ghost">
                                Log In
                            </Button>

                            <a href="#upload" className="cta">Get Started</a>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar;