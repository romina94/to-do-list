export default interface TASK {
    id: number;
    status: "todo" | "in_progress" | "done";
    title: string;
    description: string;
}