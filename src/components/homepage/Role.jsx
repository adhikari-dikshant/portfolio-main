
export default function Role({ forwardedRef }) {
    return (
        <section ref={forwardedRef} id="about" className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
            <div className="flex w-full items-center space-x-20">
                <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
                    I design. I code. I break things (prods, sometimes). And I make sure the web looks good.  <br /> <br />
                    I'm generally called with the "Who Let This Guy Near the Deploy Button?"
                </h1>
            </div>
        </section>
    );
}
