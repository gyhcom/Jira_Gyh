
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
 return (
  <div>
    <div className="">
      <Input />
      <Button size="xs">
        Primary
      </Button>
      <Button variant="secondary">
        Secondary
      </Button >
      <Button variant="destructive">
        destructive
      </Button>
      <Button variant="ghost">
        Ghost
      </Button>
      <Button variant="muted">
        Muted
      </Button>
      <Button variant="teritary">
        Outline
      </Button>
    </div> 
  </div>
 )  
}
