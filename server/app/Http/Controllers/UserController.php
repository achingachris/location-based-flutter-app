<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\SUpport\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    // register user
    public function register(Request $request)
    {
        // data validation
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        // create user
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        // generate user token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token], 201);
    }

    // login user
    public function login(Request $request)
    {
        // data validation
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // attempt to login user
        if (!Auth::attempt($validatedData)) {
            return response()->json(['message' => 'Invalid Credentials'], 401);
        }

        // get authenticated user
        $user = User::where('email', $validatedData['email'])->first();

        // generate user token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token], 200);
    }

    // user profile
    public function profile(Request $request)
    {
        // get authenticated user
        $user = $request->user();

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'location' => $user->location,
                'categories' => $user->categories,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ]
        ], 200);
    }

    // update profile
    public function updateProfile(Request $request)
    {
        // validate data
        $validatedData = $request->validate([
            'location' => 'required|string',
            'categories' => 'required|array',
            'categories.*' => 'string',
        ]);

        // get suthenticated user
        $user = $request->user();

        // update user profile
        $user->location = $validatedData['location'];
        $user->categories = $validatedData['categories'];
        $user->save();

        return response()->json(['message' => 'Profile updated successfully'], 200);

    }
}
