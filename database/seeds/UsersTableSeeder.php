<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('users')->insert([
            'name' => 'user',
            'email' => 'admin@zamzambusiness.kz',
            'password' => bcrypt('Zam$k51%'),
        ]);
    }
}
