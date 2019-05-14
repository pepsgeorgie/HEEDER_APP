<?php

namespace App\Http\Controllers;
use Validator;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\User;
use App\Channel;
use Datatables;
use Session;

class CrudController extends Controller
{
	// login
	function login(Request $request){
		$email=$request->get('email');
        $password=$request->get('password');
        $user=DB::table('users')->where(['email'=>$email])->first();
  
  		
        if($user){
        	if(Hash::check($password, $user->password)){  
	        		session()->put('user_id', $user->id);
        		if($user->role == "Teacher"){
	        		echo "Teacher";
        		}else{
	        		echo "Student";
        		}

	        }else{
	        	echo "error";
	        }
        }else{
        	echo "error2";
        }

	}

	function logout(){
		Session::flush();
	}

     //add user
    function addUser(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required',
            'password'  => 'required',
        ]);
        
        $error_array = array();
        $success_output = '';
        if ($validation->fails())
        {
            foreach ($validation->messages()->getMessages() as $field_name => $messages)
            {
                $error_array[] = $messages;
                echo "error";
            }
        }
        else
        {
           
                $user = new User([
                    'name'    =>  $request->get('name'),
                    'email'     =>  $request->get('email'),
                    'password' => Hash::make($request->get('password')),
                    'role'     =>  $request->get('role')
                ]);
                $user->save();
                echo "success";
            
        }
        
    }

    function profile(){
    	$id = session()->get('user_id');
    	$data = DB::table('users')->where('id', $id)->get();
    	// echo $data;
    	// die();
    	echo json_encode($data);
    }

	//add channel
    function addChannel(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required',
            
        ]);
        
        $error_array = array();
        $success_output = '';

        $code = Channel::latest()->first();

        $newCode = $code->code+1;

        if ($validation->fails())	
        {
            foreach ($validation->messages()->getMessages() as $field_name => $messages)
            {
                $error_array[] = $messages; 
                echo "error";
            }
        }
        else
        {
                $Channel = new Channel([
                    'name'    =>  $request->get('name'),
                    'code'     =>  $newCode
                ]);
                $Channel->save();
                echo "success";
            
        }
        
    }
    //delete View Teacher Channel
    function viewChannel(Request $request)
    {
       $data = DB::table('channels')->get();
       echo json_encode($data);
    }
     //delete View Student Channel
    function viewStudentChannel(Request $request)
    {
   	   $id = session()->get('user_id');
       $data = DB::table('class_student')->where('student_id', $id)->get();
       echo json_encode($data);
    }

    //delete channel
    function deleteChannel(Request $req)
    {
        
        $id =  $req->get('id');
        DB::table('channels')->where('id', $id)->delete();
        echo "success";
    }

    //update channel
    function updateChannel(Request $req){
        DB::table('channels')->where('id', $req->get('id'))->update(['name' => $req->get('name'),
        ]);
        echo "success";
    }
    function record(Request $req){
    	$id = $req->get('id');
    	session()->put('class_id', $id);
    	$cn = DB::table('channels')->where('id', $id)->first();
    	$class_name = $cn->name;
    	session()->put('class_name', $class_name);
    	echo $class_name;
    }
    function viewRecord(Request $req){
    	$id = session()->get('class_id');
    	$class_name = session()->get('class_name');

    	$data = DB::table('class_student')
    			->join('users', 'class_student.student_id', '=' , 'users.id')
    			->where('class_student.code_id', $id)
    			->where('isLogin', 1)
    			->select('users.name', 'class_student.*')
    			->get();

    	// echo $class_name;
    	echo json_encode($data);
    }
    function insertCode(Request $req){
		// session()->put('class_id')
		$channel = DB::table('channels')->where('code', $req->get('code'))->first();
		session()->put('class_id', $channel->id);

		$student_id = session()->get('user_id');
		DB::table('class_student')->insert([
				'student_id' => $student_id,
				'code_id' => $channel->id,
				'channelName' => $channel->name,
				'isLogin' => 1
		]);
		echo "success";

    }
    function viewStudentStream(Request $req){
    	$id = session()->get('user_id');
    	$code = $req->get('id');
    	session()->put('class_id', $code);
    	$data = DB::table('class_student')->where('id', $code)->where('student_id', $id)->first();
				DB::table('class_student')->where('id', $code)->where('student_id', $id)->update(['isLogin' => 1]); 

    	echo "success";
    }

    function viewStream(Request $req){
    	$id = session()->get('user_id');
    	$code = session()->get('class_id');
    	// session_commit()n()->set('class_id', $code);
    	$data = DB::table('class_student')->where('id', $code)->where('student_id', $id)->first();
				DB::table('class_student')->where('id', $code)->where('student_id', $id)->update(['isLogin' => 1]); 

    	echo json_encode($data);
    }
    function inActive(Request $req){
    	$id = session()->get('user_id');
    	$code = session()->get('class_id');
    	// session_commit()n()->set('class_id', $code);
    	$data = DB::table('class_student')->where('id', $code)->where('student_id', $id)->first();
				DB::table('class_student')->where('id', $code)->where('student_id', $id)->update(['isLogin' => 0]); 
    	echo json_encode($data);
    }

}
