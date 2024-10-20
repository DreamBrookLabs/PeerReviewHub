import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return(
    <div className="flex gap-4">
     <Input />
     <Button >
      Default
      </Button>
      <Button  variant="primary">
      Primary
      </Button>
      <Button  variant="secondary">
      Secondary
      </Button>
      <Button  variant="destructive">
      Destructive
      </Button>
      <Button  variant="ghost">
      Ghost
      </Button>
      <Button  variant="outline">
      Outline
      </Button>
      <Button  variant="prh">
      PRH Style
      </Button>
      <Button  variant="prh2">
      PRH2 Style
      </Button>
      <Button  variant="muted">
      Muted
      </Button>
      <Button  variant="tertiary">
      Tertiary
      </Button>
    </div>
  )
}