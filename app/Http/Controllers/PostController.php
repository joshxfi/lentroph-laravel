<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends Controller
{

  public function index()
  {
    $posts = Post::all();

    return Inertia::render('Feed/Display', [
      'posts' => $posts,
    ]);
  }

  public function store(StorePostRequest $request): RedirectResponse
  {
    $request->validate([
      'title' => 'required|string|max:255',
      'content' => 'required|string|max:255',
    ]);

    Post::create([
      'title' => $request->title,
      'content' => $request->content,
    ]);

    return Redirect::route('feed');
  }

  public function destroy(StorePostRequest $request): RedirectResponse
  {
    $post = Post::find($request->postId);

    if (!$post) {
      return redirect()->route('feed')->with('error', 'Post not found.');
    }

    $post->delete();

    return redirect()->route('feed')->with('success', 'Post deleted successfully.');
  }
}
