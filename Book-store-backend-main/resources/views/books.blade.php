<!-- resources/views/books.blade.php -->

@extends('layouts.app')

@section('content')
    <!-- You can access the $bookData and $filters variables here and display the data -->
    <div>
        <h1>Book Store</h1>

        <!-- Display the books data -->
        @foreach ($bookData as $book)
            <div>
                <h2>{{ $book->title }}</h2>
                <p>Author: {{ $book->author }}</p>
                <p>Genre: {{ $book->genre }}</p>
                <!-- Add other book details you want to display -->
            </div>
        @endforeach

        <!-- Display the filters -->
        <h3>Filters:</h3>
        @foreach ($filters as $key => $values)
            <div>
                <p>{{ ucfirst($key) }}:</p>
                <ul>
                    @foreach ($values as $value)
                        <li>{{ $value }}</li>
                    @endforeach
                </ul>
            </div>
        @endforeach

        <!-- Add pagination links if you are using pagination -->
        {{ $bookData->links() }}
    </div>
@endsection
