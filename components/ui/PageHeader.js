import Link from "next/link";
import { Button } from "@/components/ui/Btn";

export default function PageHeader({
  preTitle,
  title,
  description,
  buttonText1,
  buttonText2,
  buttonHref1,
  buttonHref2,
}) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="h4 text-accent tracking-widest! uppercase">{preTitle}</p>
        <h1>{title}</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p>{description}</p>
        </div>
        <div className="flex flex-row gap-4">
          <Button asChild>
            <Link href={buttonHref1}>{buttonText1}</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={buttonHref2}>{buttonText2}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
