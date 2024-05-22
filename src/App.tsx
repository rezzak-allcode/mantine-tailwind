import { Autocomplete, Button, Input } from '@mantine/core';

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-red-600">Tailwind button</Button>
          <hr />
          <Input placeholder="Enter your name" variant="default" />
        </div>
        <Autocomplete
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
      </div>
    </>
  );
}

export default App;
