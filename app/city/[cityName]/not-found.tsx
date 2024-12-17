import PageWrapper from "@/app/Components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="flex h-screen flex-col items-center justify-center bg-white text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-gray-200">404</h1>

        {/* Error Message */}
        <p className="mt-4 text-2xl font-medium text-pink-500">
          Something went wrong
        </p>

        {/* Supporting Message */}
        <p className="mt-2 text-gray-500">
          We're deeply sorry, but something went wrong. Please try to refresh
          the page or{" "}
          <a href="/" className="font-semibold text-pink-500 hover:underline">
            start over
          </a>
          .
        </p>
      </div>
    </PageWrapper>
  );
}
