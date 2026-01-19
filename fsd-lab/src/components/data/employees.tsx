export function Employee({
    firstName,
    lastName
}: {
    firstName: string;
    lastName: string;
}) {
    return (
        <p className="text-base">{firstName} {lastName}</p>
    );
}
