import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Start consulting your way.</div>
            <h2 className="text-3xl font-bold">
                Build an Agent
            </h2>
            <p>Build an Agent and start your discussion.</p>
            {/* <Image src="images/cta.svg" alt="cta" width={362} height={232} /> */}
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Deploy your New Agent</p>
                </Link>
            </button>
        </section>
    )
}
export default Cta
