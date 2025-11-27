import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Hello the frame</h2>
      <Button variant="outline">Click me</Button>
      <UserButton />
      <Image
        src="/stack-logo.png"
        alt="Stack Logo"
        width={200}
        height={200}
      />
    </div>
  );
}