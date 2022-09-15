package com.digitaldynamics.convertitoredivalute;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private EditText euro;
    private TextView dollari;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        euro = (EditText) findViewById(R.id.etEuro);
        dollari = (TextView) findViewById(R.id.tvDollari);
    }

    public void convertiValuta(View view) {
        Log.d("convertiValuta", "Click sul button Converti");

        if (!isEmpty(euro)) {
            String valutaEuroStr = euro.getText().toString();

            Log.d("convertiValuta", "Euro: = " + valutaEuroStr );

            double euroDouble = Double.parseDouble(valutaEuroStr);

            double dollariDouble = euroDouble * 1.18213;

            dollari.setText(String.format( "%.2f", dollariDouble ));
        } else {
            Toast.makeText(getApplicationContext(), "Il campo da convertire è vuoto.", Toast.LENGTH_SHORT).show();
        }
    }

    private boolean isEmpty(EditText euro) {
        String input = euro.getText().toString().trim();
        return input.length() == 0;
    }
}