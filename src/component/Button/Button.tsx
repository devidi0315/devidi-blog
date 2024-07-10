import { cn } from "@/src/util/cn"
import { cva, VariantProps } from "class-variance-authority"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleProps {}

const Button = ({ className, hover = "default", outline, border, ...props }: ButtonProps) => {
  return <button className={cn(style({ hover, outline, border }), className)} {...props}/>
}

export default Button;

const style = cva(["btn rounded-md py-2 text-text1"], {
  variants: {
    hover: {
      default: "hover:bg-bg",
      success: "hover:bg-success",
      outlineDefault: "hover:outline hover:outline-bg",
      outlineSuccess: "hover:outline hover:outline-success"
    },
    outline: {
      success: "outline outline-success",
    },
    border: {
      default: "border border-bg",
      success: "border border-success"
    }
  }
})

export type ButtonStyleProps = VariantProps<typeof style>;