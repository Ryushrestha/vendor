import Button from "@/components/button/Button";
import Checkbox from "@/components/button/Checkbox";
import Input from "@/components/input/Input";

export default function Home() {
  return (
    <>
    <Button title='Read more' variant="primary"/>
    <Button title='Read more' variant="emergency"/>
    <Button title='Read more' variant="secondary"/>
    <Button title='Read more' variant="outline"/>
    <Checkbox title="Remember me"/>
    </>
  );
}
