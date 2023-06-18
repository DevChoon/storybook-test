import { BasicCssBottomNavigation } from "@/stories/basicCss/BasicCssBottomNavigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BasicCssBottomNavigation
        displayLight="dark"
        onMoveToPage={() => {
          null;
        }}
      />
      <div>11asdasdsad</div>
    </main>
  );
}
