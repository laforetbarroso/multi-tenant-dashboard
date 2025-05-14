<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $fillable = ['organization_id', 'name', 'description'];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
