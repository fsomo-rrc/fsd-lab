export function Footer({ name, studentNumber }: { name: string; studentNumber: string }) {
    const year = new Date().getFullYear();

    return (
        <footer className="w-auto bg-[#bcc8d0] text-[#0c0e0e] px-6 py-4 m-5 text-center">
            <p className="text-sm">
                © Copyright Pixell River Financial {year} {name} – {studentNumber}
            </p>
        </footer>
    );
}
