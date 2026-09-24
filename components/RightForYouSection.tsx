import services from "@/content/services";

type Props = {
  service: typeof services[keyof typeof services];
};


export default function RightForYouSection({ service }: Props) {


    return (




     <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="section-heading">
              {service.suitability.title}
            </h2>

            <p className="text-epsom-muted mt-4">
              {service.suitability.intro}
            </p>

          </div>

          <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">
            {service.suitability.items.map(
              (item: string, i: number) => (
                <li
                  key={item}
                  className={`flex gap-4 py-5 border-b border-epsom-crystal/35${
                    i >= 4 ? " sm:border-b-0" : ""
                  }${i === 5 ? " border-b-0" : ""}`}
                >
                  <span
                    className="text-epsom-maroon mt-1 shrink-0"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <p className="text-epsom-muted text-sm">
                    {item}
                  </p>
                </li>
              )
            )}
          </ul>

          <p className="max-w-4xl mx-auto mt-8 text-epsom-muted leading-relaxed">
            {service.suitability.closing}
          </p>

        </div>
      </section>







        )


    
}