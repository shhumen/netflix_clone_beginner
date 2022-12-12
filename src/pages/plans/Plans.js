const Plans = () => {

    const plans = [
        {name: "Premium", desc: "4K + HDR"},
        {name: "Basic", desc: "720p"},
        {name: "Standard", desc: "1080p"},
    ]

    return (
        <>

            {
                plans.map((plan) => (
                    <div className="plan">
                        <div className="plan_info">
                            <h5>{plan.name}</h5>
                            <h5>{plan.desc}</h5>
                        </div>
                        <button>Subscribe</button>
                    </div>
                ))
            }
        </>
    )
}

export default Plans
