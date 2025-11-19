export const subjects = [
  {
    slug: 'csharp',
    name: 'C#',
    questions: [
      {
        q: "What is the difference between 'ref' and 'out' parameters in C#?",
        a: "Both pass arguments by reference. 'ref' requires initialization before passing; 'out' does not, but the method must assign a value before returning."
      },
      {
        q: 'Explain boxing and unboxing.',
        a: 'Boxing converts a value type to object (heap allocation). Unboxing extracts the value type from object and requires type casting.'
      },
    ],
  },
  {
    slug: 'oops',
    name: 'OOP',
    questions: [
      { q: 'Define encapsulation.', a: 'Encapsulation bundles data and methods, restricting direct access via access modifiers and properties.' },
      { q: 'What is polymorphism?', a: 'Polymorphism lets methods behave differently based on the object (overloading/overriding).' },
    ],
  },
  {
    slug: 'winforms',
    name: 'WinForms',
    questions: [
      { q: 'How do you update UI from a background thread?', a: 'Use Invoke/BeginInvoke on the UI control or SynchronizationContext to marshal calls to the UI thread.' },
    ],
  },
  {
    slug: 'mvc',
    name: 'ASP.NET MVC',
    questions: [
      { q: 'Explain the MVC pattern.', a: 'Model (data/logic), View (UI), Controller (input/flow). Separation improves testability and maintainability.' },
      { q: 'What are action filters?', a: 'Attributes that run pre/post action logic (e.g., Authorization, HandleError). Custom filters extend cross-cutting behavior.' },
    ],
  },
  {
    slug: 'webapi',
    name: 'Web API',
    questions: [
      { q: 'How do you version a Web API?', a: 'Use URL, query string, header versioning, or ASP.NET API Versioning library with conventions/attributes.' },
    ],
  },
  {
    slug: 'mssql',
    name: 'MS SQL Server',
    questions: [
      { q: 'What is a clustered index?', a: 'It defines the physical order of data in a table; a table can have only one clustered index.' },
    ],
  },
  {
    slug: 'dotnet-core',
    name: '.NET Core / .NET',
    questions: [
      { q: 'What is dependency injection?', a: 'Built-in IoC container provides services via constructor injection; improves testability and loose coupling.' },
    ],
  },
  {
    slug: 'react',
    name: 'React JS',
    questions: [
      { q: 'Explain controlled vs uncontrolled components.', a: 'Controlled components are driven by React state; uncontrolled use refs/DOM for state.' },
    ],
  },
  {
    slug: 'node',
    name: 'Node JS',
    questions: [
      { q: 'What is the event loop?', a: 'It handles non-blocking I/O by processing callback queues across phases (timers, I/O, check, close, microtasks).' },
    ],
  },
  {
    slug: 'mongodb',
    name: 'MongoDB',
    questions: [
      { q: 'When to use embedding vs referencing?', a: 'Embed for tightly coupled data accessed together; reference for large or loosely coupled relationships.' },
    ],
  },
  {
    slug: 'ef',
    name: 'Entity Framework',
    questions: [
      { q: 'What is lazy vs eager loading?', a: 'Lazy loads on access; eager loads via Include() to fetch related data upfront.' },
    ],
  },
  {
    slug: 'linq',
    name: 'LINQ',
    questions: [
      { q: 'Difference between deferred and immediate execution?', a: 'Deferred queries run when enumerated. Immediate operators like ToList/Count execute right away.' },
    ],
  },
];
